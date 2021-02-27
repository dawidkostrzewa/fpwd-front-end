const API_URL = process.env.REACT_APP_API_URL;

export const getHTTP = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${API_URL}${url}`);
    if (!response.ok) {
        const err = await response.json();
        console.log(err);
        throw new Error(err);
    }
    const res = await response.json();
    return res;
};