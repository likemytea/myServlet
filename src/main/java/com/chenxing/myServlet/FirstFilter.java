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
 * https://www.runoob.com/w3cnote/filter-filterchain-filterconfig-intro.html
 * 1.filter程序是一个实现了特殊java接口的java类，和servlet类似，也是由servlet容器调用和执行的。 <br>
 * 2.当在web.xml中注册一个filter后，这个filter可以决定
 * 
 */
public class FirstFilter implements Filter {
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
		System.out.println("begin headers-------------------");
		Enumeration<?> headerNames = ((HttpServletRequest) request).getHeaderNames();

		while (headerNames.hasMoreElements()) {
			String headerName = (String) headerNames.nextElement();
			System.out.println(headerName + ": " + ((HttpServletRequest) request).getHeader(headerName));
		}
		System.out.println("end headers-------------------");

		// 在调用目标前写入响应内容
		response.setContentType("text/html; charset=gb2312");
		PrintWriter out = response.getWriter();
		out.println("IP地址为：" + request.getRemoteHost() + "<br>");

		chain.doFilter(request, response);

		// 在目标返回后写入响应内容
		out.println("<br>名称为encoding的初始化参数的值为：" + paramValue);
		out.println("<br>当前Web程序的真实路径为：" + filterConfig.getServletContext().getRealPath("/"));

		// out.println("<br>修改了test.html文件！");
	}

	@Override
	public void destroy() {
		this.filterConfig = null;
	}
}
