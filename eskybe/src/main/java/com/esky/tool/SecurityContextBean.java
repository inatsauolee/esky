package com.esky.tool;//package com.scor.asds.tool;
//
//import java.io.Serializable;
//
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import com.scor.asds.model.entities.User;
//import com.scor.asds.service.UserService;
//
//public class SecurityContextBean implements Serializable {
//
//	private static final long serialVersionUID = 8315063876608439734L;
//	public static final String CODE_APPLI_CYRIUS_V1 = "CYRIUS";
//	public static final String CODE_APPLI_CYRIUS_V2 = "CYRIUSV2";
//	public static final String AUTH_HEADER = "AUTH_HEADER";
//	public static final Object AUTH_COOKIE = "SCOR_USER";
//
//	private static final Logger log = LoggerFactory.getLogger(SecurityContextBean.class);
//
//	private String firstName;
//	private String lastName;
//	private String immatriculation;
//	private User user;
//	private int hasAcces = -1;
//
//	private HttpServletRequest req;
//
//	private HttpServletResponse res;
//
//	private UserService userService;
//
//	public int init(ServletRequest request, ServletResponse response) {
//		try {
//			req = (HttpServletRequest) request;
//			res = (HttpServletResponse) response;
//
//			// Direct authentif Test
//			String matricule = "";
//
//			matricule = "U003226";
////                   matricule = getPreAuthenticatedPrincipal(req);
//
//			if (matricule != null && !matricule.isEmpty()) {
//				//
//				// //Appel WS UserCerber
//
//				user = userService.findByUsername(matricule);
//				if (user != null) {
//					this.hasAcces = 1;
//				}
//			}
//
//		} catch (final Exception ex) {
//			ex.printStackTrace();
//		}
//		return this.hasAcces;
//	}
//
//	protected String getPreAuthenticatedPrincipal(HttpServletRequest request) {
//
//		String matricule = null;
//
//		if (request.getHeader(AUTH_HEADER) != null) {
//			matricule = request.getHeader(AUTH_HEADER);
//		}
//		if (matricule == null) {
//			// get Authentification cookie
//			final Cookie[] cookies = request.getCookies();
//			if (cookies != null) {
//				for (final Cookie cookie : cookies) {
//					if (AUTH_COOKIE.equals(cookie.getName()) || AUTH_HEADER.equals(cookie.getName())) {
//						matricule = cookie.getValue();
//					}
//				}
//			}
//		}
//		if (matricule != null) {
//			return matricule.trim().toUpperCase();
//		}
//		return null;
//	}
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getImmatriculation() {
//		return immatriculation;
//	}
//
//	public void setImmatriculation(String immatriculation) {
//		this.immatriculation = immatriculation;
//	}
//
//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//}
