library MeasureExample version '1.0.0'

/*
 * Clinical Quality Measure Example
 * Demonstrates measure logic patterns
 */

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers

// Measure parameters
parameter "Measurement Period" Interval<DateTime>

// Patient context
context Patient

// Initial Population
define "Initial Population":
  AgeInYearsAt(start of "Measurement Period") between 18 and 75

// Denominator - patients who should receive the intervention
define "Denominator":
  "Initial Population"
    and exists "Qualifying Encounters"

define "Qualifying Encounters":
  [Encounter: type in "Office Visit Value Set"] E
    where E.period during "Measurement Period"
      and E.status = 'finished'

// Numerator - patients who received the intervention
define "Numerator":
  "Denominator"
    and exists "HbA1c Tests Performed"

define "HbA1c Tests Performed":
  [Observation: code in "HbA1c Laboratory Test"] O
    where O.status = 'final'
      and O.effective during "Measurement Period"

// Denominator Exclusions
define "Denominator Exclusions":
  exists "Advanced Illness Diagnoses"
    or exists "Frailty Diagnoses"

define "Advanced Illness Diagnoses":
  [Condition: code in "Advanced Illness Value Set"] C
    where C.onset during "Measurement Period"
      and C.verification-status = 'confirmed'

define "Frailty Diagnoses":
  [Condition: code in "Frailty Value Set"] C
    where C.onset during "Measurement Period"
      and C.verification-status = 'confirmed'

// Numerator Exclusions
define "Numerator Exclusions":
  null

// Stratification
define "Stratification 1":
  "Initial Population"
    and AgeInYearsAt(start of "Measurement Period") between 18 and 44

define "Stratification 2":
  "Initial Population"
    and AgeInYearsAt(start of "Measurement Period") between 45 and 64

define "Stratification 3":
  "Initial Population"
    and AgeInYearsAt(start of "Measurement Period") between 65 and 75

// Supplemental Data Elements
define "SDE Ethnicity":
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
    return E.extension.value

define "SDE Race":
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
    return E.extension.value

define "SDE Sex":
  Patient.gender

// Value set placeholders
define "Office Visit Value Set":
  null

define "HbA1c Laboratory Test":
  null

define "Advanced Illness Value Set":
  null

define "Frailty Value Set":
  null
