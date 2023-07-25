package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class TestDiscriminatedInput(key: String)
object TestDiscriminatedInput extends ShapeTag.Companion[TestDiscriminatedInput] {
  val hints: Hints = Hints.empty

  val key = string.required[TestDiscriminatedInput]("key", _.key).addHints(smithy.api.HttpLabel(), smithy.api.Required())

  implicit val schema: Schema[TestDiscriminatedInput] = struct(
    key,
  ){
    TestDiscriminatedInput.apply
  }.withId(ShapeId("smithy4s.example", "TestDiscriminatedInput")).addHints(hints)
}
