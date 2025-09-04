class ApiClient {
    constructor() {
        this.baseURL = "http://localhost:3000/api/v1";
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    async customFetch(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            const headers = { ...this.defaultHeaders, ...options.headers };

            const config = {
                ...options,
                headers,
                credentials: "include",
            };

            console.log(`Fetching ${url}`);

            const response = await fetch(url, config);

            // ✅ Check for HTTP status
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = new Error(errorData.message || `HTTP error! Status: ${response.status}`);
                error.status = response.status;
                error.data = errorData;
                throw error;
            }

            // ✅ Handle no-content responses
            if (response.status === 204) return null;

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("API Error", error);
            throw error;
        }
    }

    // ✨ Add query param support (utility method)
    buildQueryParams(params = {}) {
        const query = new URLSearchParams(params).toString();
        return query ? `?${query}` : '';
    }

    // ✅ Auth endpoints

    async signup(name, email, password) {
        return this.customFetch("/users/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password })
        });
    }

    async login(email, password) {
        return this.customFetch("/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        });
    }

    async getProfile() {
        // ✅ Missing return
        return this.customFetch("/users/me", {
            method: "POST"
        });
    }

    // ✨ Additional: logout endpoint
    async logout() {
        return this.customFetch("/users/logout", {
            method: "POST"
        });
    }

    // ✨ Additional: get method with query params
    async getWithQuery(endpoint, params = {}) {
        const query = this.buildQueryParams(params);
        return this.customFetch(`${endpoint}${query}`, {
            method: "GET"
        });
    }

    // ✨ Optional future addition: token auth (if needed)
    setAuthToken(token) {
        this.defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    clearAuthToken() {
        delete this.defaultHeaders['Authorization'];
    }
}

const apiClient = new ApiClient();

export default apiClient;
