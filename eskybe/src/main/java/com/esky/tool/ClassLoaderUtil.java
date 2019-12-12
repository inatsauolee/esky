package com.esky.tool;

public class ClassLoaderUtil {

	public static Object load(String className)
			throws ClassNotFoundException, InstantiationException, IllegalAccessException {
		@SuppressWarnings("rawtypes")
		Class loadedClass = Class.forName(className);
		return loadedClass.newInstance();
	}

	public static <T> T load(String className, Class<T> clazz) {
		try {
			return clazz.cast(load(className));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

//	public static void main(String[] args) {
//		String className = AppendNode.class.getName();
//		Operation dcm = load(className, Operation.class);
//		System.out.println(dcm);
//
//	}

}
