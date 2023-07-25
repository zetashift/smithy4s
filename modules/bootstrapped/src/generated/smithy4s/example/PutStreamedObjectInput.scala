package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class PutStreamedObjectInput(key: String)
object PutStreamedObjectInput extends ShapeTag.Companion[PutStreamedObjectInput] {
  val hints: Hints = Hints.empty

  val key = string.required[PutStreamedObjectInput]("key", _.key).addHints(smithy.api.Required())

  implicit val schema: Schema[PutStreamedObjectInput] = struct(
    key,
  ){
    PutStreamedObjectInput.apply
  }.withId(ShapeId("smithy4s.example", "PutStreamedObjectInput")).addHints(hints)
}
