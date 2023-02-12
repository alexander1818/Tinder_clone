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

async function http(path: string, config: RequestInit, { dispatch, success, error }: TActions) {
  const request = new Request(path, config);
  const response = await fetch(request);

  await response
    .json()
    .then((result) => {
      if (!response.ok) {
        const error = (result && result.message) || response.statusText;
        return Promise.reject(error);
      }
      dispatch({ type: success.type, payload: result.data });
    })
    .catch((err) => dispatch({ type: error.type, payload: err }));
}

const headers = {
  'Content-Type': 'application/json',
};

export async function authQuery<T, U>(body: T, path: string, actions: TActions): Promise<void> {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  };

  return await http(`${API.mainPath}${path}`, config, { ...actions });
}

const authorizationHeaders = { Authorization: `${localStorage.getItem('accessToken')}` };

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
    return await http(`${API.mainPath}${path}`, config, { ...actions });
  } else if (method === 'GET' && authorizationHeaders.Authorization) {
    const config = {
      method,
      headers: {
        ...headers,
        ...authorizationHeaders,
      },
    };

    return await http(`${API.mainPath}${path}`, config, { ...actions });
  }
  return await http(`${API.mainPath}${path}`, { method, headers }, { ...actions });
}
