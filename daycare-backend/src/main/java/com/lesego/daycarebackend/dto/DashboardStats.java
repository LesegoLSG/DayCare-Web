package com.lesego.daycarebackend.dto;

public class DashboardStats {
    private long totalUsers;
    private long adminUsers;
    private long contentCreatorUsers;
    private long totalBlogs;

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
