import {
    FaChartLine,
    FaBuilding,
    FaUsers,
    FaCalendarCheck,
    FaBed,
    FaCreditCard,
    FaCog,
    FaSignOutAlt,
    FaTachometerAlt
} from "react-icons/fa";

export type DrawerData = {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number }>;
    link: string;
    badge?: string;
    description?: string;
}

export const adminDrawerData: DrawerData[] = [
    {
        id: "dashboard",
        name: "Dashboard",
        icon: FaTachometerAlt,
        link: "/admin-dashboard",
        description: "Overview & Statistics"
    },
    {
        id: "products",
        name: "Products",
        icon: FaBuilding,
        link: "/admin-dashboard/products",
        description: "Manage Products"
    },
    {
        id: "payments",
        name: "Payments",
        icon: FaCreditCard,
        link: "/admin-dashboard/payments",
        description: "Financial Transactions"
    },
    {
        id: "users",
        name: "Users",
        icon: FaUsers,
        link: "/admin-dashboard/users",
        description: "Customer Management"
    },
    {
        id: "analytics",
        name: "Analytics",
        icon: FaChartLine,
        link: "/admin-dashboard/analytics",
        badge: "New",
        description: "Reports & Insights"
    },
    {
        id: "settings",
        name: "Settings",
        icon: FaCog,
        link: "/admin-dashboard/settings",
        description: "System Configuration"
    },
    {
        id: "logout",
        name: "Logout",
        icon: FaSignOutAlt,
        link: "/logout",
        description: "Sign Out"
    }
]