package com.lesego.daycarebackend.Controller.UserController;

import com.lesego.daycarebackend.Service.DashboardServices.DashboardService;
import com.lesego.daycarebackend.Service.DashboardServices.IDashboardService;
import com.lesego.daycarebackend.dto.DashboardStats;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    @Autowired
    private IDashboardService iDashboardService;
    //Get system stats
    @GetMapping("/stats")
    public ResponseEntity<DashboardStats> getDashboardStats(){
        DashboardStats stats = iDashboardService.getDashboardStats();
        return ResponseEntity.ok(stats);
    }
}
