import { Dispatch } from 'redux';
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

    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('access_token', access_token);

    return dispatch({ type: success.type, payload: data });
  }

  if (response.status === 401) {
    return dispatch({ type: error.type, payload: result.message || response.statusText });
  }
}

const authorizationHeaders = { Authorization: `${localStorage.getItem('access_token')}` };

export async function httpQuery<U>(method: string, path: string, actions: TActions, body?: U) {
  if (
    (method === 'POST' || method === 'PUT' || method === 'PATCH') &&
    authorizationHeaders.Authorization
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
  } else if (method === 'GET' && authorizationHeaders.Authorization) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
    };

    return await http(`${API.mainPath}${path}`, config);
  }
  return await http(`${API.mainPath}${path}`, { method, headers });
}
