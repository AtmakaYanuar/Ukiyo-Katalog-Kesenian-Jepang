const API_URL = "https://6a17ded21878294b597bf9c1.mockapi.io/Blog";

export const getBlogs = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const addBlog = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const updateBlog = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const deleteBlog = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};