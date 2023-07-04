/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s
package http4s

object SimpleRestJsonBuilder extends SimpleRestJsonBuilder(1024, false, true)

class SimpleRestJsonBuilder private (
    simpleRestJsonCodecs: internals.SimpleRestJsonCodecs
) extends SimpleProtocolBuilder[alloy.SimpleRestJson](
      simpleRestJsonCodecs
    ) {

  def this(
      maxArity: Int,
      explicitNullEncoding: Boolean,
      hostPrefixInjection: Boolean
  ) =
    this(
      new internals.SimpleRestJsonCodecs(
        maxArity,
        explicitNullEncoding,
        hostPrefixInjection
      )
    )

  def withMaxArity(maxArity: Int): SimpleRestJsonBuilder =
    new SimpleRestJsonBuilder(
      maxArity,
      simpleRestJsonCodecs.explicitNullEncoding,
      simpleRestJsonCodecs.hostPrefixInjectionEnabled
    )

  def withExplicitNullEncoding(
      explicitNullEncoding: Boolean
  ): SimpleRestJsonBuilder =
    new SimpleRestJsonBuilder(
      simpleRestJsonCodecs.maxArity,
      explicitNullEncoding,
      simpleRestJsonCodecs.hostPrefixInjectionEnabled
    )
  def disableHostPrefixInjection(): SimpleRestJsonBuilder =
    new SimpleRestJsonBuilder(
      simpleRestJsonCodecs.maxArity,
      simpleRestJsonCodecs.explicitNullEncoding,
      false
    )
}
