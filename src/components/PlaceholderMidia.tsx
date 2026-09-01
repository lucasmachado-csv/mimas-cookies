/* Marcador de mídia — trocar pelos arquivos do ensaio profissional (foto e vídeo).
   Mantém o espaço reservado no layout até o material da marca existir. */
type Props = {
  rotulo: string;
  nota?: string;
  className?: string;
};

export default function PlaceholderMidia({
  rotulo,
  nota,
  className = "aspect-video",
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-azul/30 bg-baunilha/40 p-6 text-center ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-azul/60">
        {rotulo}
      </p>
      {nota ? (
        <p className="max-w-xs text-xs leading-relaxed text-tinta-suave/70">
          {nota}
        </p>
      ) : null}
    </div>
  );
}
