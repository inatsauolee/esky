package com.esky.tool;

import java.util.Map;

public interface ASDSClonable {

	ASDSClonable clone(Map<Object, Object> referenceMaps, Map<Object, Object> reverseMaps)
			throws CloneNotSupportedException;

	void clearId();

	public void synchroObject(Map<Object, Object> referenceMaps, Map<Object, Object> reverseMaps);

	Long getId();
}
