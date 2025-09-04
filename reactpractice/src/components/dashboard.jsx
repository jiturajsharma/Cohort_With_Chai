import React from 'react'
import { useNavigate } from 'react-router'

function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Clear token or any stored user data
        localStorage.removeItem("token")
        // Redirect to login
        navigate("/login")
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <main className="p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
                    <p className="text-gray-700">
                        This is your dashboard. You can manage your account, view stats, or navigate to other parts of your app from here.
                    </p>
                </div>

                {/* Example Cards / Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-4 rounded shadow text-center">
                        <h3 className="text-lg font-medium">Users</h3>
                        <p className="text-2xl font-bold text-blue-600">1,234</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center">
                        <h3 className="text-lg font-medium">Orders</h3>
                        <p className="text-2xl font-bold text-green-600">567</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-center">
                        <h3 className="text-lg font-medium">Revenue</h3>
                        <p className="text-2xl font-bold text-purple-600">$12,345</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
