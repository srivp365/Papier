import React from 'react';
import { Plate, usePlateEditor } from 'platejs/react';
import { BasicBlocksPlugin, BasicMarksPlugin } from '@platejs/basic-nodes/react';

// 1. Import the newly generated AutoformatKit
import { AutoformatKit } from '@/components/editor/plugins/autoformat-kit';
import { Editor, EditorContainer } from '@/components/ui/editor'; 

export const PlateEditor: React.FC = () => {
  const editor = usePlateEditor({
    plugins: [
      BasicBlocksPlugin,
      BasicMarksPlugin,
      // 2. Spread the autoformat kit into your plugins array
      ...AutoformatKit
    ],
    value: [
      {
        type: 'p',
        children: [{ text: 'Try typing ## and pressing space!' }],
      },
    ],
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor placeholder="Type here..." />
      </EditorContainer>
    </Plate>
  );
};

export default PlateEditor;
