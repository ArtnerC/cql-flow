library MultiNoRels version '1.0.0'

using Simple

context Patient

define TwoSources:
  from Patient p, Encounter e
  return p.id
