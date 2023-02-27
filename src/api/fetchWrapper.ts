import { Dispatch } from 'redux';
import { mainRoutes } from '../Routes/Routes';
import { API } from './API';

export type TActionType = {
  type: string;
  payload?: string;
};

export type TActions = {
  dispatch: Dispatch;
  success: TActionType;
  error: TActionType;
};

const headers = {
  'Content-Type': 'application/json',
};

async function http(path: string, config: RequestInit) {
  const request = new Request(path, config);
  const response = await fetch(request);

  return await response
    .json()
    .then((result) => {
      return { result, response };
    })
    .catch((err) => {
      return err;
    });
}

// eslint-disable-next-line prettier/prettier
export async function authQuery<T>(body: T, path: string, { dispatch, success, error }: TActions) {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  };

  const { result, response } = await http(`${API.mainPath}${path}`, config);
  console.log('result', result);
  if (response.status === 201 || response.status === 200) {
    const { data, refresh_token, access_token } = result;

    localStorage.setItem('user', data);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('access_token', access_token);

    return dispatch({ type: success.type, payload: data });
  }

  if (result.error.message === 'jwt expired') {
    dispatch({ type: error.type, payload: result.error.message || response.statusText });
    localStorage.clear();
    return;
  }
}

// eslint-disable-next-line prettier/prettier
export async function httpQuery<U>(method: string, path: string, { dispatch, success, error }: TActions, body?: U) {
  const authorizationHeaders = { authorization: `${localStorage.getItem('access_token')}` };
  if (
    (method === 'POST' || method === 'PUT' || method === 'PATCH') &&
    authorizationHeaders.authorization
  ) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
      body: JSON.stringify(body),
    };
    return await http(`${API.mainPath}${path}`, config);
  } else if (method === 'GET' && authorizationHeaders.authorization) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
    };

    const { result, response } = await http(`${API.mainPath}${path}`, config);
    console.log(response);

    if (result.message === 'jwt expired') {
      const prevActions = { dispatch, success, error };

      dispatch({ type: error.type, payload: result.message || response.statusText });
      const refreshTokenResult = await refreshToken(prevActions);

      return dispatch({ type: refreshTokenResult?.type, payload: refreshTokenResult?.payload });
    }
    if (response.statusText === 'Unauthorized') {
      dispatch({ type: error.type, payload: result.message || response.statusText });
      return;
    }

    return dispatch({ type: success.type, payload: result });
  }
  return await http(`${API.mainPath}${path}`, { method, headers });
}

export async function refreshToken({ dispatch, success, error }: TActions) {
  const username = localStorage.getItem('user');
  const refresh_token = localStorage.getItem('refresh_token');

  return await authQuery({ refresh_token, username }, API.refreshToken, {
    dispatch,
    success,
    error,
  });
}

export const handleLogout = () => {
  localStorage.clear();
  window.location.href = mainRoutes.home.path;
  return;
};
