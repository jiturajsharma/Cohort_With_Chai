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
            const headers = {
                ...this.defaultHeaders,
                ...(options.headers || {})
            };

            const config = {
                ...options,
                headers,
                credentials: 'include'
            };

            console.log(`Fetching ${url}`);
            const response = await fetch(url, config);

            if (!response.ok) {
                let errorBody;
                try {
                    errorBody = await response.json();
                } catch (e) {
                    errorBody = await response.text();
                }
                console.error(`API Error: ${response.status} ${response.statusText}`);
                throw new Error(`Request failed: ${response.status} - ${JSON.stringify(errorBody)}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log('API Error', error);
            throw error;
        }
    }

    async signup(name, email, password, username) {
        return this.customFetch("/users/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password, username })
        });
    }

    async login(email, password) {
        return this.customFetch("/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        });
    }

    async me() {
        return this.customFetch("/users/me", {
            method: "GET"
        });
    }
}

const apiClient = new ApiClient();
export default apiClient;
