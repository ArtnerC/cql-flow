library PatientDataExample version '1.0.0'

/*
 * Patient Data Query Example
 * Demonstrates FHIR data access and filtering
 */

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers

// Set patient context
context Patient

// Basic patient information
define "Patient Age":
  AgeInYears()

define "Patient Name":
  Patient.name.given[0] + ' ' + Patient.name.family[0]

// Query for active conditions
define "Active Conditions":
  [Condition: status = 'active']

define "Diabetes Conditions":
  "Active Conditions" C
    where C.code in "Diabetes Value Set"

// Query for recent encounters
define "Recent Encounters":
  [Encounter: status = 'finished'] E
    where E.period.start during Interval[Today() - 30 days, Today()]

// Query for medications
define "Current Medications":
  [MedicationStatement: status = 'active'] M
    where M.effective overlaps Interval[Today() - 1 year, Today()]

// Laboratory results
define "Recent HbA1c Results":
  [Observation: code in "HbA1c Laboratory Test"] O
    where O.status = 'final'
      and O.effective during Interval[Today() - 1 year, Today()]
    sort by effective.value descending

define "Latest HbA1c Value":
  First("Recent HbA1c Results").value as Quantity

// Complex calculations
define "Diabetes Risk Score":
  case
    when "Patient Age" >= 45 and "Latest HbA1c Value" >= 6.5 '%' then 'High'
    when "Patient Age" >= 35 and "Latest HbA1c Value" >= 5.7 '%' then 'Medium'
    else 'Low'
  end

// Value set placeholders (would be defined externally)
define "Diabetes Value Set":
  null

define "HbA1c Laboratory Test":
  null
