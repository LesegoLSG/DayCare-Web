package com.lesego.daycarebackend.Service.DashboardServices;

import com.lesego.daycarebackend.Repository.BlogRepo.BlogRepo;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.dto.DashboardStats;
/**
 * Interface for dashboard-related services.
 */
public interface IDashboardService {
    /**
     * Counts the number of blogs created by a user with the given user ID.
     *
     * @param userId the ID of the user
     * @return the number of blogs created by the user
     */
    public long getBlogsByUserId(int userId);

    /**
     * Retrieves statistics for the dashboard.
     *
     * @return a DashboardStats object containing the statistics
     */
    public DashboardStats getDashboardStats();

}
