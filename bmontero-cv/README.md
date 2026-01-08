# 📄 Generador de CV - Brian Montero

Sistema de generación de CVs basado en YAML para crear múltiples versiones de currículum optimizadas para diferentes propósitos.

## 📁 Estructura del Proyecto

```
bmontero-cv/
├── data/                    # Archivos fuente YAML
│   ├── cv-ats.yaml         # CV optimizado para ATS (Applicant Tracking Systems)
│   └── cv-milytics.yaml    # CV enfocado en experiencia Milytics
├── output/                  # CVs generados (PDF, HTML, etc.)
└── README.md               # Este archivo
```

## 🎯 Propósito

Este sistema permite:

- **Múltiples versiones**: Crear diferentes versiones del CV para diferentes propósitos
- **Mantenimiento centralizado**: Actualizar información en un solo lugar (YAML)
- **Optimización específica**: Adaptar el CV para ATS, empresas específicas, o roles particulares
- **Versionado**: Mantener historial de cambios en los archivos YAML

## 📝 Archivos de Datos

### `cv-ats.yaml`
CV optimizado para sistemas ATS (Applicant Tracking Systems) como los usados por LinkedIn, Indeed, Glassdoor, etc.

**Características:**
- Palabras clave optimizadas para ATS
- Formato estructurado
- Información completa y detallada
- Enfoque en habilidades técnicas y experiencia

### `cv-milytics.yaml`
CV enfocado en destacar la experiencia y proyectos relacionados con Milytics.

**Características:**
- Detalle de proyectos específicos de Milytics
- Resultados cuantificables
- Tecnologías utilizadas
- Casos de éxito

## 🔧 Uso

### 1. Editar los archivos YAML

Edita los archivos en `data/` para actualizar tu información:

```yaml
personal:
  nombre: "Brian Montero"
  email: "brian@bmontero.com"
  # ... más campos
```

### 2. Generar CVs

Usa tu herramienta de generación preferida para convertir los YAML a PDF/HTML:

**Opciones:**
- [JSON Resume](https://jsonresume.org/) - Convierte JSON/YAML a múltiples formatos
- [HackMyResume](https://github.com/hacksalot/HackMyResume) - Generador de CVs
- Scripts personalizados (Python, Node.js, etc.)
- Herramientas online que acepten YAML

### 3. Guardar resultados

Los CVs generados se guardan en `output/`:
- `output/cv-ats.pdf`
- `output/cv-milytics.pdf`
- etc.

## 📋 Estructura de Datos YAML

Cada archivo YAML contiene:

- **personal**: Información de contacto y perfil básico
- **resumen**: Resumen profesional
- **experiencia**: Historial laboral con responsabilidades y logros
- **educacion**: Formación académica
- **habilidades**: Técnicas y blandas
- **proyectos**: Proyectos destacados
- **certificaciones**: Certificaciones profesionales
- **idiomas**: Idiomas y niveles
- **formato**: Metadatos del CV

## 🔄 Flujo de Trabajo Recomendado

1. **Actualizar datos**: Edita los archivos YAML cuando tengas nueva información
2. **Generar CVs**: Ejecuta tu herramienta de generación
3. **Revisar**: Verifica los CVs generados en `output/`
4. **Versionar**: Haz commit de los cambios en Git
5. **Distribuir**: Usa los CVs generados según necesidad

## 🚀 Próximos Pasos

- [ ] Configurar herramienta de generación (JSON Resume, script personalizado, etc.)
- [ ] Crear templates para diferentes formatos (PDF, HTML, Markdown)
- [ ] Automatizar generación con scripts
- [ ] Agregar más versiones de CV según necesidades

## 📚 Recursos

- [JSON Resume Schema](https://jsonresume.org/schema/)
- [YAML Documentation](https://yaml.org/)
- [ATS Optimization Tips](https://www.jobscan.co/blog/)

## 📝 Notas

- Mantén los archivos YAML actualizados
- Usa palabras clave relevantes para ATS
- Incluye resultados cuantificables en experiencia y proyectos
- Personaliza cada versión según el propósito específico

---

**Última actualización**: 2025-01-XX





