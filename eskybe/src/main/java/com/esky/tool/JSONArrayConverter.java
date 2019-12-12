package com.esky.tool;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class JSONArrayConverter implements AttributeConverter<JSONArray, String> {

	@Override
	public String convertToDatabaseColumn(JSONArray json) {
		if (json == null)
			return null;
		else
			return json.toJSONString();
	}

	@Override
	public JSONArray convertToEntityAttribute(String jsonString) {
		if (jsonString == null || jsonString.isEmpty())
			return null;
		JSONParser parser = new JSONParser();
		try {
			return (JSONArray) parser.parse(jsonString);
		} catch (ParseException e) {

			return null;
		}

	}

}