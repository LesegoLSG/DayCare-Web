package com.lesego.daycarebackend.Config;

import com.lesego.daycarebackend.Service.UserService;

import com.lesego.daycarebackend.Service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
/**
 * JwtAuthenticationFilter intercepts incoming requests to validate JWT tokens
 * and set up Spring Security context if the token is valid.
 * This filter is executed once per request.
 * @author Mhlongo Lesego
 */
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JWTService jwtService;
    @Autowired
    private UserService userService;
    /**
     * Filters incoming requests to validate JWT tokens and set up Spring Security context.
     *
     * @param request     HTTP request object.
     * @param response    HTTP response object.
     * @param filterChain Filter chain to execute after filtering.
     * @throws ServletException If there is an issue with the servlet.
     * @throws IOException      If there is an IO issue.
     */

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,@NonNull HttpServletResponse response,@NonNull FilterChain filterChain)
            throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        // Check if the Authorization header is present and starts with "Bearer "
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response);
            return;
        }

        // Extract JWT token from the Authorization header
        jwt = authHeader.substring(7);
        userEmail = jwtService.extractUserName(jwt);
        // If user email is extracted and no authentication is set in the security context
        if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
            // Validate the JWT token
            if(jwtService.isTokenValid(jwt,userDetails)){
                // Create authentication token and set it in the security context
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                        userDetails,null,userDetails.getAuthorities()
                );
                token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                securityContext.setAuthentication(token);
                SecurityContextHolder.setContext(securityContext);  // Set the security context
            }
        }
        filterChain.doFilter(request,response); // Proceed to the next filter in the chain
    }
}
