import instance from "./index";

const get = async (route) => {
  try {
    const response = await instance.get(route);
    return response.data;
  } catch (e) {
    throw e;
  }
};

const post = async (route, data) => {
  try {
    const response = await instance.post(route, {
      ...data,
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};

const postFile = async (route, file) => {
  try {
    const response = await instance.post(route, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};

export { get, post, postFile };
