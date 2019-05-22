package com.chenxing.myServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * 
 */
public class SecondFilter implements Filter {
	private FilterConfig filterConfig = null;
	String paramValue = null;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;
		paramValue = filterConfig.getInitParameter("encoding");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("begin headers--222-----------------");
		Enumeration<?> headerNames = ((HttpServletRequest) request).getHeaderNames();

		while (headerNames.hasMoreElements()) {
			String headerName = (String) headerNames.nextElement();
			System.out.println(headerName + ": " + ((HttpServletRequest) request).getHeader(headerName));
		}
		System.out.println("end headers-----222--------------");

		// 在调用目标前写入响应内容
		response.setContentType("text/html; charset=" + paramValue);
		PrintWriter out = response.getWriter();
		out.println("IP地址为：" + request.getRemoteHost() + "<br>");

		chain.doFilter(request, response);

		// 在目标返回后写入响应内容
		out.println("<br>名2222称为encoding的初始化参数的值为：" + paramValue);
		out.println("<br>当2222前Web程序的真实路径为：" + filterConfig.getServletContext().getRealPath("/"));

		// out.println("<br>修改了test.html文件！");
	}

	@Override
	public void destroy() {
		this.filterConfig = null;
	}
}
