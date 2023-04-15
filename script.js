window.addEventListener('devicemotion', function(event) {
	// Berechne die Beschleunigung des Geräts
	var acceleration = Math.sqrt(Math.pow(event.acceleration.x, 2) + Math.pow(event.acceleration.y, 2) + Math.pow(event.acceleration.z, 2));
	
	// Skaliere die Beschleunigung auf einen Wert zwischen 0 und 100
	var value = Math.min(100, acceleration * 10);
	
	// Aktualisiere die Anzeige
	document.getElementById('progress').style.width = value + '%';
	document.getElementById('label').innerHTML = 'Shake Meter: ' + Math.round(value);
	
	// Sende den Wert an den RP2040
	// Hier solltest du deinen Code ergänzen, um den Wert an den RP2040 zu senden
});
