# Human body mesh attribution

The interactive body guide combines two openly licensed anatomical sources. They are separate atlases, visually registered for this illustration; the combined model is a conversation aid, not a clinically precise anatomical registration or a treatment map.

## Exterior and sacrum: HuBMAP CCF v1.2

`public/assets/body-hubmap-skin.glb` and `public/assets/body-hubmap-pelvis.glb` are unmodified copies of **VH_M_Skin.glb** and **VH_M_Pelvis.glb** from the HuBMAP CCF 3D Reference Object Library, version 1.2. The renderer uses the pelvis file's sacrum mesh.

- Creators: Kristen Browne and the HuBMAP CCF 3D Reference Object Library team.
- Sources: [skin](https://github.com/hubmapconsortium/ccf-releases/blob/main/v1.2/models/VH_M_Skin.glb), [pelvis](https://github.com/hubmapconsortium/ccf-releases/blob/main/v1.2/models/VH_M_Pelvis.glb), [library and suggested citation](https://hubmapconsortium.github.io/ccf/pages/ccf-3d-reference-library.html).
- License: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).
- Local SHA-256: skin `8cab299d04323e6364938a271647df5671138a2177f412e741a0d6bd4536ee1c`; pelvis `06349b8c70a019b3fd36d4e059e02efed915bf305cf15f8e32547732c6865b09`.

Suggested citation: Browne, K., Schlehlein, H., Herr II, B. W., Quardokus, E., Bueckle, A., Börner, K. (2022). *HuBMAP CCF 3D Reference Object Library*. https://hubmapconsortium.github.io/ccf/pages/ccf-3d-reference-library.html. Accessed 2026-10-17.

## Inner bones: BodyParts3D 4.0

`public/assets/body-bp3d-anatomy.glb` is an adapted, selected subset of the **BodyParts3D 4.0 PART-OF tree** 99% polygon-reduced OBJ archive. It contains 30 separate real meshes: left and right clavicles and scapulae; first through sixth ribs on each side; first through seventh thoracic vertebrae; first through fifth lumbar vertebrae; and the manubrium and body of the sternum. It is 3,408,012 bytes.

- Required source credit: **BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.**
- Sources: [official archive](https://dbarchive.biosciencedbc.jp/data/bodyparts3d/LATEST/partof_BP3D_4.0_obj_99.zip), [structure list](https://dbarchive.biosciencedbc.jp/data/bodyparts3d/LATEST/partof_parts_list_e.txt), [element mapping](https://dbarchive.biosciencedbc.jp/data/bodyparts3d/LATEST/partof_element_parts.txt), [official license and README](https://dbarchive.biosciencedbc.jp/data/bodyparts3d/LATEST/README_e.html).
- License: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).
- Adaptation: selected OBJ meshes were combined into one GLB, with axes changed from millimetres/Z-up to metres/Y-up, uniformly scaled for the HuBMAP figure, and translated to align sacrum and shoulder landmarks. The source topology was not sculpted or replaced.
- Local SHA-256: `83297ab2cd080757d9dfbf75778df50c73091aaeee7ad3526bd7f6a2a9d6b857`.

The browser renders these meshes through a translucent cyan exterior and soft pink region focus. The two atlases describe different source bodies, so the relative positions are illustrative. The body guide gives general information and does not diagnose symptoms or identify cupping placement.
