package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.struct

final case class GetIntEnumOutput(result: EnumResult)
object GetIntEnumOutput extends ShapeTag.Companion[GetIntEnumOutput] {
  val hints: Hints = Hints(
    smithy.api.Output(),
  )

  val result = EnumResult.schema.required[GetIntEnumOutput]("result", _.result).addHints(smithy.api.Required())

  implicit val schema: Schema[GetIntEnumOutput] = struct(
    result,
  ){
    GetIntEnumOutput.apply
  }.withId(ShapeId("smithy4s.example", "GetIntEnumOutput")).addHints(hints)
}
