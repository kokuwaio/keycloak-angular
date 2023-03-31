package io.kokuwa.keycloak;

import io.micronaut.runtime.Micronaut;

/**
 * Micronaut application.
 *
 * @author stephan@grayc.de
 */
public class Application {

	public static void main(String[] args) {
		Micronaut.build(args).banner(false).mainClass(Application.class).eagerInitSingletons(true).start();
	}
}
