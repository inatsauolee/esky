package com.esky.tool;//package com.scor.asds.tool;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.context.ApplicationContext;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//import org.springframework.web.context.support.WebApplicationContextUtils;
//
//@Component
//@Order(1)
//public class ScorRedirectionTokenFilter implements Filter {
////extends RedirectionTokenFilter
//	public static final String AUTH_HEADER = "AUTH_HEADER";
//	public static final Object AUTH_COOKIE = "SCOR_USER";
//
//	ApplicationContext applicationContext = null;
//
//	FilterConfig filterConfig = null;
//
////	@Override
////	public void init(FilterConfig filterConfig) throws ServletException {
////		this.filterConfig = filterConfig;
////	}
//
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//			throws IOException, ServletException {
//		try {
//			final HttpServletRequest req = (HttpServletRequest) request;
//
//			// String matricule = "U003226";
//			String login = req.getUserPrincipal().getName();
//			System.out.println(login);
//			final String matricule = getPreAuthenticatedPrincipal(req);
//			System.out.println(matricule);
//			if (matricule != null) {
//				applicationContext = WebApplicationContextUtils
//						.getWebApplicationContext(filterConfig.getServletContext());
//				SecurityContextBean scb = (SecurityContextBean) applicationContext.getBean("SecurityContextBean");
//				if (scb.getUser() != null) {
//					chain.doFilter(request, response);
//				} else {
//					int appVersion = scb.init(request, response);
//					if (appVersion == 2 || appVersion == 1)
//						chain.doFilter(request, response);
//					else
//						sendError(matricule, response);
//				}
//			} else {
//				sendError(matricule, response);
//			}
//		} catch (final Throwable th) {
//		}
//
//	}
//
//	private void sendError(String matricule, ServletResponse response) {
//		final HttpServletResponse res = (HttpServletResponse) response;
//		res.setHeader("Description", "Access not Allowed!");
//		try {
//			res.sendError(403);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
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
//	@Override
//	public void destroy() {
//		// TODO Auto-generated method stub
//
//	}
//
//}