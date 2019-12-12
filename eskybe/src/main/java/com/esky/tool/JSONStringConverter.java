package com.esky.tool;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class JSONStringConverter implements AttributeConverter<JSONObject, String> {

	@Override
	public String convertToDatabaseColumn(JSONObject json) {
		if (json == null)
			return null;
		else
			return json.toJSONString();
	}

	@Override
	public JSONObject convertToEntityAttribute(String jsonString) {
		if (jsonString == null || jsonString.isEmpty())
			return null;
		JSONParser parser = new JSONParser();
		try {
			return (JSONObject) parser.parse(jsonString);
		} catch (ParseException e) {

			return null;
		}

	}

}