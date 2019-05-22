package com.chenxing.myServlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DemoServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3724483127240533110L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// super.service(request, response);（切记一定要去掉父类的调用！！！）

		/*
		 * 向页面输出值：HelloWorld
		 */
		// 想浏览器发送数据类型
		response.setContentType("text/html");
		// 获取输出流
		PrintWriter out = response.getWriter();
		// 设置要输出的数据
		out.println("<h1>HelloWorld!</h1>");
		// 关闭流
		out.close();

	}

}
