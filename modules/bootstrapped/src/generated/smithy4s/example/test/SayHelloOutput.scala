package smithy4s.example.test

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class SayHelloOutput(payload: SayHelloPayload, header1: String)
object SayHelloOutput extends ShapeTag.Companion[SayHelloOutput] {
  val hints: Hints = Hints.empty

  val payload = SayHelloPayload.schema.required[SayHelloOutput]("payload", _.payload).addHints(smithy.api.HttpPayload(), smithy.api.Required())
  val header1 = string.required[SayHelloOutput]("header1", _.header1).addHints(smithy.api.HttpHeader("X-H1"), smithy.api.Required())

  implicit val schema: Schema[SayHelloOutput] = struct(
    payload,
    header1,
  ){
    SayHelloOutput.apply
  }.withId(ShapeId("smithy4s.example.test", "SayHelloOutput")).addHints(hints)
}
