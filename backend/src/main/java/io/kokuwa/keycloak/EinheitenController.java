package io.kokuwa.keycloak;

import java.security.Principal;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;

/**
 * Controller.
 *
 * @author stephan@grayc.de
 */
@Controller
public class EinheitenController {

	@Secured(SecurityRule.IS_AUTHENTICATED)
	@Get("/protected")
	Principal getProtected(Principal principal) {
		return principal;
	}

	@Secured(SecurityRule.IS_ANONYMOUS)
	@Get("/public")
	void getPublic() {}
}
