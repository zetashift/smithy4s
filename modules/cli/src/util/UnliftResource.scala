package smithy4s.cli.util

import cats.effect.kernel.MonadCancelThrow
import cats.effect.kernel.Resource
import smithy4s.GenLift
import smithy4s.Service

object UnliftResource {

  /** Transform a resource with an interpreter to a plain interpreter (allocating and using the
    * resource every time it's called).
    *
    * Applies the transformation on the given service.
    */
  def unliftService[Alg[_[_, _, _, _, _]], Op[_, _, _, _, _], F[_]: MonadCancelThrow](
    algRes: Resource[F, smithy4s.Monadic[Alg, F]]
  )(
    implicit service: Service[Alg, Op]
  ): Alg[GenLift[F]#λ] = service.transform[GenLift[F]#λ](unliftResource(algRes, service))

  /** Transform a resource with an interpreter to a plain interpreter (allocating and using the
    * resource every time it's called).
    *
    * This variant is the plain transformation on Ops.
    */
  def unliftResource[Alg[_[_, _, _, _, _]], Op[_, _, _, _, _], F[_]: MonadCancelThrow](
    algRes: Resource[F, smithy4s.Monadic[Alg, F]],
    service: Service[Alg, Op],
  ): smithy4s.Interpreter[Op, F] =
    new smithy4s.Interpreter[Op, F] {

      def apply[A, B, C, D, E](
        op: Op[A, B, C, D, E]
      ): F[C] = algRes.use(service.asTransformation[GenLift[F]#λ](_)(op))

    }

}
