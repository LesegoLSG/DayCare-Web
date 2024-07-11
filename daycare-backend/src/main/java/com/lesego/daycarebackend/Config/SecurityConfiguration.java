package com.lesego.daycarebackend.Config;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    @Autowired
    private  JwtAuthenticationFilter jwtAuthenticationFilter;
    @Autowired
    private  UserService userService;
    /**
     * Configures security filters and policies for different endpoints.
     *
     * @param http HttpSecurity object to configure security settings.
     * @return SecurityFilterChain configured with specified settings.
     * @throws Exception If configuration encounters an error.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(request -> request.requestMatchers("/api/v1/auth/**","/api/v1/publicBlog/**", "/api/v1/dashboard/**")
                        .permitAll()
                        .requestMatchers("/api/v1/user/**").hasAnyAuthority(RoleType.SYSTEM_ADMIN.name(), RoleType.ADMIN.name())
                        .requestMatchers("/api/v1/blog/**").hasAnyAuthority(RoleType.SYSTEM_ADMIN.name(), RoleType.ADMIN.name(),RoleType.CONTENT_CREATOR.name())
                        .requestMatchers("/api/v1/profile/**").hasAnyAuthority(RoleType.SYSTEM_ADMIN.name(), RoleType.ADMIN.name(),RoleType.CONTENT_CREATOR.name())
                        .anyRequest().authenticated())

                .sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider()).addFilterBefore(
                        jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class
                );
        return http.build();
    }
    /**
     * Configures the authentication provider.
     *
     * @return DaoAuthenticationProvider configured with userDetailsService and passwordEncoder.
     */
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userService.userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    /**
     * Provides a BCrypt password encoder bean.
     *
     * @return BCryptPasswordEncoder bean instance.
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    /**
     * Provides an AuthenticationManager bean.
     *
     * @param config AuthenticationConfiguration object for obtaining the authentication manager.
     * @return AuthenticationManager instance.
     * @throws Exception If an error occurs while obtaining the authentication manager.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
        throws Exception{
        return config.getAuthenticationManager();
    }

    /**
     * Configures CORS (Cross-Origin Resource Sharing) for all endpoints.
     *
     * @return CorsConfigurationSource configured with allowed origins, methods, and headers.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*"); // Allow requests from any origin (you can customize this)
        configuration.addAllowedMethod("*"); // Allow all HTTP methods
        configuration.addAllowedHeader("*"); // Allow all headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
