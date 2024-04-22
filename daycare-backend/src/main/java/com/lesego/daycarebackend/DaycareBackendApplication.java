package com.lesego.daycarebackend;

import com.lesego.daycarebackend.Entity.User.RoleType;
import com.lesego.daycarebackend.Entity.User.User;
import com.lesego.daycarebackend.Repository.UserRepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class DaycareBackendApplication implements CommandLineRunner {
	@Autowired
	private final  UserRepository userRepository;

	public DaycareBackendApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(DaycareBackendApplication.class, args);
		System.out.println("Successful");
	}

	@Override
	public void run(String... args) throws Exception {
		User adminAccount = userRepository.findByRole(RoleType.SYSTEM_ADMIN);
		if(adminAccount == null) {
			User user = new User();
			user.setEmail("lesegomhlongo78@gmail.com");
			user.setFirstName("Lesego");
			user.setLastName("Mhlongo");
			user.setRole(RoleType.SYSTEM_ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("lesegoLSGTSI2#"));
			user.setWhatsAppNo("0640373089");
			user.setFacebookLink("www.facebook.com");
			user.setInstagramLink(("www.instagram.com"));
			user.setLinkedInLink("www.linkedIn.com");
			userRepository.save(user);
		}
	}
}
