package smithy4s.example.test

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class SayHelloPayload(result: String)
object SayHelloPayload extends ShapeTag.Companion[SayHelloPayload] {
  val hints: Hints = Hints.empty

  val result = string.required[SayHelloPayload]("result", _.result).addHints(smithy.api.Required())

  implicit val schema: Schema[SayHelloPayload] = struct(
    result,
  ){
    SayHelloPayload.apply
  }.withId(ShapeId("smithy4s.example.test", "SayHelloPayload")).addHints(hints)
}
