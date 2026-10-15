"use client";

import { useRef, useState } from "react";
import { shot, type KindCard, type Project } from "../data/content";

export default function KindCards({ items, projects }: { items: KindCard[]; projects: Project[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<KindCard | null>(null);

  const related = (k: KindCard) => projects.filter((p) => p.kind === k.kind);
  const cover = (k: KindCard) => k.image ?? (related(k)[0] ? shot(related(k)[0]) : undefined);

  const open = (k: KindCard) => {
    setActive(k);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  return (
    <>
      <ul className="kinds">
        {items.map((k) => {
          const src = cover(k);
          return (
            <li key={k.title}>
              <button type="button" className="kind" onClick={() => open(k)}>
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="kind-thumb" src={src} alt="" loading="lazy" />
                ) : (
                  <div className="kind-thumb ph" aria-hidden>📱</div>
                )}
                <span className="kind-body">
                  <span className="kind-title">{k.title}</span>
                  <span className="kind-stack">{k.stack}</span>
                </span>
                <span className="kind-more" aria-hidden>+</span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={ref}
        aria-label={active?.title}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
      >
        {active && (
          <>
            {cover(active) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="modal-img" src={cover(active)} alt={active.title} />
            ) : (
              <div className="modal-img ph" aria-hidden>📱</div>
            )}
            <div className="modal-body">
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              <ul className="modal-list">
                {active.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <p className="kind-stack">{active.stack}</p>

              {related(active).length > 0 && (
                <>
                  <h4>Мої роботи</h4>
                  <ul className="gallery">
                    {related(active).map((p) => (
                      <li key={p.url}>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={shot(p)} alt={`Скріншот сайту ${p.title}`} loading="lazy" />
                          <span>{p.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <button type="button" className="close" onClick={close} aria-label="Закрити">×</button>
          </>
        )}
      </dialog>
    </>
  );
}