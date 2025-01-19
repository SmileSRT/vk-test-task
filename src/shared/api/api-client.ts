import { notification } from 'antd';

const get = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data: Promise<T> = await response.json();

    return data;
  } catch (error) {
    notification.open({
      message: 'Ошибка получения данных',
      description:
        error instanceof Error ? error.message : 'Что-то пошло не так...',
      placement: 'bottomRight',
      type: 'error',
    });

    return null;
  }
};

const apiClient = {
  get: get,
};

export default apiClient;
