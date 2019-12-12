package com.esky.tool;

import lombok.Getter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
public class ParseCustomFormat {
	@SuppressWarnings("unused")
	private static final Logger log = LoggerFactory.getLogger(ParseCustomFormat.class);
	public static String ASDSCOREDATE = "yyyy.MM.dd'T'HH:mm:ss.sssssssss'Z'";
	public static String ASDSBEDATE = "yyyy-MM-dd'T'HH:mm:ss.sss'X'";
	public static String ASDSFEDATE = "yyyy-MM-dd'T'HH:mm:ss.sss'Z'";

	public static final SimpleDateFormat exporting = new SimpleDateFormat(ASDSCOREDATE);
	public static final SimpleDateFormat displayDBDateForm = new SimpleDateFormat(ASDSBEDATE);

	public static final SimpleDateFormat displayDateForm = new SimpleDateFormat("dd/MM/yyyy");

	public static Double parseDouble(String input) {
		if (input != null)
			input = input.replace("'", "");
		Double value = null;
		try {
			value = Double.parseDouble(input);
		} catch (Exception e) {
			// log.error("can't converte <<"+input +">> to Double");
		}
		return value;
	}

	public static Double parseDouble(Object input) {
		return parseDouble(String.valueOf(input));
	}

	public static Integer parseInt(String input) {
		if (input == null)
			return null;
		input = input.replace("'", "");
		Integer value = null;
		try {
			value = Integer.parseInt(input);
		} catch (Exception e) {
			try {
				Double doping = Double.parseDouble(input);
				return doping.intValue();
			} catch (Exception e2) {
				// log.error("can't converte <<"+input +">> to Double");
			}
		}
		return value;
	}

	public static boolean isInteger(String s) {
		return isInteger(s, 10);
	}

	public static boolean isInteger(String s, int radix) {
		if (s.isEmpty())
			return false;
		for (int i = 0; i < s.length(); i++) {
			if (i == 0 && s.charAt(i) == '-') {
				if (s.length() == 1)
					return false;
				else
					continue;
			}
			if (Character.digit(s.charAt(i), radix) < 0)
				return false;
		}
		return true;
	}

	public static Date parseDate(String input) {

		Date dateValue = null;
		try {
			dateValue = displayDateForm.parse(input);
		} catch (ParseException e) {
			dateValue = null;
		}
		return dateValue;
	}

	public static Date parseDBDate(String input) {
		if (input == null)
			return null;

		Date dateValue = null;
		try {
			dateValue = (new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.sssX")).parse(input);
		} catch (Exception e) {
			try {
				dateValue = (new SimpleDateFormat(ASDSFEDATE)).parse(input);
			} catch (Exception ex) {
				dateValue = null;
			}
		}
		return dateValue;
	}

	public static String stringValueOf(Object object) {
		if (object == null)
			return null;
		else
			return String.valueOf(object);

	}

	public static Boolean parseBoolean(Object input) {

		Boolean value = null;
		try {
			value = Boolean.valueOf(stringValueOf(input));
		} catch (Exception e) {
			// log.error("can't converte <<"+input +">> to Boolean");
		}
		return value;
	}

	public static boolean equalDouble(Double sum, double d) {

		return Math.abs(sum - d) < 0.0000000001;
	}

//	@org.junit.Test
//	public void Test() {
//		Assert.assertTrue( parseBoolean(true));
//		Assert.assertFalse(! parseBoolean(false));
//		Assert.assertTrue( parseBoolean("true"));
//		Assert.assertFalse( !parseBoolean("false"));
//	}
	public static Integer parseInt(Object object) {
		if (object == null)
			return null;
		else
			return parseInt(object.toString());
	}

	public static JSONObject parseJSONObject(String object) {
		if (object == null)
			return new JSONObject();
		else {
			JSONParser parser = new JSONParser();
			try {
				return (JSONObject) parser.parse(object);
			} catch (Exception e) {
				return new JSONObject();
			}
		}

	}

	public static JSONArray parseJSONArray(String object) {
		if (object == null)
			return new JSONArray();
		else {
			JSONParser parser = new JSONParser();

			try {
				return (JSONArray) parser.parse(object);
			} catch (Exception e) {
				return new JSONArray();
			}
		}
	}

	public static Long parseLong(Object inputO) {
		if (inputO == null)
			return null;

		String input = inputO.toString();
		input = input.replace("'", "");
		Long value = null;
		try {
			value = Long.parseLong(inputO.toString());
		} catch (Exception e) {
			try {
				Double doping = Double.parseDouble(input);
				return doping.longValue();
			} catch (Exception e2) {
				// log.error("can't converte <<"+input +">> to Double");
			}
		}
		return value;
	}

	public static String parseString(Object object) {
		if (object == null)
			return null;
		return String.valueOf(object);
	}

	public static Date parseDate(Object object) {

		return parseDate(parseString(object));
	}

	public static Date parseDBDate(Object object) {
		return parseDBDate(parseString(object));
	}

	public static boolean getBoolean(Object input) {
		Boolean value = false;
		try {
			value = Boolean.valueOf(stringValueOf(input));
		} catch (Exception e) {
			// log.error("can't converte <<"+input +">> to Boolean");
		}
		return value;
	}

}
