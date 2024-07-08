package com.lesego.daycarebackend.Service.DashboardServices;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.Repository.BlogRepo.BlogRepo;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import com.lesego.daycarebackend.dto.DashboardStats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService implements IDashboardService {
    @Autowired
    public  UserRepository userRepository;
    @Autowired
    public  BlogRepo blogRepo;

    public DashboardStats getDashboardStats(){
        DashboardStats stats = new DashboardStats();

        stats.setTotalUsers(userRepository.count());
        stats.setAdminUsers(userRepository.countByRole(RoleType.ADMIN));
        stats.setContentCreatorUsers(userRepository.countByRole(RoleType.CONTENT_CREATOR));
        stats.setTotalBlogs(blogRepo.count());

        return stats;

    }

    public long getBlogsByUserId(int userId) {
        return blogRepo.countByUserId(userId);
    }

}
