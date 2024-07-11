package com.lesego.daycarebackend.dto;
/**
 * Data transfer object (DTO) representing statistics for dashboard.
 * @author Mhlongo Lesego
 */
public class DashboardStats {
    //Attributes
    private long totalUsers;
    private long adminUsers;
    private long contentCreatorUsers;
    private long totalBlogs;

    //Getters and setters
    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getAdminUsers() {
        return adminUsers;
    }

    public void setAdminUsers(long adminUsers) {
        this.adminUsers = adminUsers;
    }

    public long getContentCreatorUsers() {
        return contentCreatorUsers;
    }

    public void setContentCreatorUsers(long contentCreatorUsers) {
        this.contentCreatorUsers = contentCreatorUsers;
    }

    public long getTotalBlogs() {
        return totalBlogs;
    }

    public void setTotalBlogs(long totalBlogs) {
        this.totalBlogs = totalBlogs;
    }
}
