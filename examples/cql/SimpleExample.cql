library SimpleExample version '1.0.0'

/*
 * Basic CQL Library Example
 * Demonstrates fundamental CQL constructs
 */

using FHIR version '4.0.1'

// Simple value definitions
define "Hello": 'World'

define "CurrentDate": Today()

define "Age": AgeInYears()

// Basic arithmetic
define "SimpleCalculation": 2 + 3 * 4

// String operations
define "Greeting": 'Hello, ' + "Hello"

// Boolean logic
define "IsAdult": "Age" >= 18

// Conditional logic
define "AgeCategory": 
  case
    when "Age" < 18 then 'Minor'
    when "Age" >= 65 then 'Senior'
    else 'Adult'
  end
