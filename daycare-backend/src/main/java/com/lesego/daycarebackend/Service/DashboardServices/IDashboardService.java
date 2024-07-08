package com.lesego.daycarebackend.Service.DashboardServices;

import com.lesego.daycarebackend.Repository.BlogRepo.BlogRepo;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.dto.DashboardStats;

public interface IDashboardService {
    public long getBlogsByUserId(int userId);

    public DashboardStats getDashboardStats();

}
