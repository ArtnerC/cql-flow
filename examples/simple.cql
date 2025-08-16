library SimpleLibrary version '1.0.0'

using FHIR version '4.0.1'

parameter "Measurement Period" Interval<DateTime>

define "Simple Expression":
  true

define "Another Expression":
  1 + 2
