import React from 'react';

const InstallationGuide = () => {
  return (
    <div className="mt-10">
      <div className="prose prose-invert max-w-none text-slate-300">
        <p className="border-l-4 border-accent pl-4 italic">
          <strong>Note:</strong> A clean install is always helpful in the case of the installation of an upgraded operating system. This bypasses all the compatibility issues, bugs, and glitches. And finally, you will get a fresh system with a fresh operating system.
        </p>

        <h3>Create Bootable Media</h3>
        <ol>
          <li>Insert a flash drive, at least 16 GB.</li>
          <li>Now, open <strong>Rufus</strong> to create bootable media for Windows 11.</li>
          <li>Make sure to keep all the default settings as it is.</li>
          {/* --- Screenshot placeholder --- */}
          <li>Now, click on the <strong>Start button</strong> and wait a while to finish.</li>
          <li>After completion, Rufus will ask you to restart the PC.</li>
        </ol>

        <h3>Windows Clean Installation</h3>
        <p>After completion, plug in the USB to the system you want to install Windows 11 and restart the system. While booting, tap the Boot Menu key before the Windows logo to open it.</p>

        <ol>
          <li>You see a screen with a list of drives, <strong>choose the one you inserted/plugged in</strong>, and hit <strong>Enter</strong>.</li>
          <li>Then the <strong>Windows logo</strong> will appear on the screen for a while; if you see the <strong>animated dots,</strong> it means everything is fine.</li>
          {/* --- Screenshot placeholder --- */}
          <li>Next, you will be asked to select your Language, Time, and Keyboard method, and after configuring all these things, Click <strong>Next</strong>.</li>
          <li>Now click on <strong>Install Now</strong>.</li>
          <li>Now, the Windows setup will ask you to enter the Product Key; if you have a Windows product key, proceed to enter it. Otherwise, click on “I don’t have a key” or “Do this later.”</li>
          <li>Now setup will ask you to choose the correct edition of which you have a License, either Home or Pro. Make sure to enter the correct edition. If you choose the wrong edition, you must perform a clean install again.</li>
          <li>Accept the license terms. To do so, check the box in front of “I accept the license terms.”</li>
          <li>Click <strong>Next</strong>.</li>
          <li>Click <strong>Custom: Install Windows only (advanced)</strong>.</li>
          <li>Select the drive and then click <strong>Next</strong>.<br/><small className="text-slate-400">[If there are multiple partitions, select each from the bottom, then click to delete until only one unallocated drive is left]</small></li>
          <li>Select the unallocated drive list; Click <strong>New &gt; Apply &gt; OK</strong>.</li>
          <li>Select the Primary partition from multiple partitions, and click <strong>Next</strong>.</li>
          <li>Just wait for a few seconds while Windows installs.</li>
          <li>When all this setup is completed, Windows will reboot into the setup automatically.</li>
        </ol>
      </div>
    </div>
  );
};

export default InstallationGuide;