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
                ...options.headers
            };

            const config = {
                ...options,
                headers,
                credentials: 'include'
            };

            console.log(`Fetching ${url}`);
            const response = await fetch(url, config);

            // Check if response is not OK (status not in range 200–299)
            if (!response.ok) {
                const errorBody = await response.text();
                console.error(`API Error: ${response.status} ${response.statusText}`);
                throw new Error(`Request failed with status ${response.status}: ${errorBody}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log('API Error', error);
            throw error;
        }
    }

    async signup(name, email, password){
        return this.customFetch("/users/register", {
            method: "POST",
            body: JSON.stringify({name, email, password})
        })
    }

    async login(email, password){
        return this.customFetch("/users/login", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
    }
    async me() {
        return this.customFetch("/users/me", {
            method: "GET"
        });
    }
}
