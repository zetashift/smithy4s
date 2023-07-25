package weather

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class Dog(name: String)
object Dog extends ShapeTag.Companion[Dog] {
  val hints: Hints = Hints.empty

  val name = string.required[Dog]("name", _.name).addHints(smithy.api.Required())

  implicit val schema: Schema[Dog] = struct(
    name,
  ){
    Dog.apply
  }.withId(ShapeId("weather", "Dog")).addHints(hints)
}
