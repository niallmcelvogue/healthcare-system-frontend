import { retrieveAgencyUsersApi } from "@/api/admin/admin-api";
import { useEffect } from "react"

export const AdminDashboard =() => {

    function retrieveAgencyUsers() {
        // Fetch data from the API
        retrieveAgencyUsersApi()
           .then(response => {
                console.log(response.data);
            })
           .catch(error => {
                console.error(error);
            });
    }
    useEffect(() => {
        retrieveAgencyUsers();
    })

    return (
        <div>
            Admin Dashboard
        </div>
    )
}